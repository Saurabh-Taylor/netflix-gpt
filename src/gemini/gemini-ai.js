import { GoogleGenerativeAI } from '@google/generative-ai';
 
const gemini_api_key =  import.meta.env.VITE_GEMINI_API_KEY;

const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};
 
const geminiModel = googleAI.getGenerativeModel({
  model: 'gemini-pro',
  geminiConfig,
});
 
export const generate = async (promptQues) => {
  try {
    const prompt = promptQues;
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    return response.text()
  } catch (error) {
    console.log('response error', error);
  }
};


// generate("do u know about AI if yes tell me in few words");