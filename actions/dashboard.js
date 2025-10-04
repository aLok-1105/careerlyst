"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIInsights = async (industry) => {
  console.log("industry", industry);
  try {
    const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;
        
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });    
      const text = response.text;
      
    // const result = await model.generateContent(prompt);
    // const response = result.response;
    // console.log("response", response);
    
    if (!text) {
      console.log("error -----------------------------------------");
      throw new Error("No response from AI model");
    }
    
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    
    if (!cleanedText) {
      throw new Error("Empty response from AI model");
    }

    const parsedData = JSON.parse(cleanedText);
    console.log("parsedData", parsedData);
    // Validate that we have the required fields
    if (!parsedData || typeof parsedData !== 'object') {
      throw new Error("Invalid JSON response from AI model");
    }
    
    return parsedData;
  } catch (error) {
    console.error("Error generating AI insights:", error);
    
    // Return default insights if AI fails
    return {
      salaryRanges: [
        { role: "Entry Level", min: 40000, max: 60000, median: 50000, location: "General" },
        { role: "Mid Level", min: 60000, max: 90000, median: 75000, location: "General" },
        { role: "Senior Level", min: 90000, max: 130000, median: 110000, location: "General" }
      ],
      growthRate: 5,
      demandLevel: "Medium",
      topSkills: ["Communication", "Problem Solving", "Teamwork"],
      marketOutlook: "Neutral",
      keyTrends: ["Digital Transformation", "Remote Work"],
      recommendedSkills: ["Communication", "Problem Solving", "Teamwork"]
    };
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // If no insights exist, generate them
  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return industryInsight;
  }

  return user.industryInsight;
}
