const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("api key");
const path = require("path");

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const giveTextResponse = async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
};

const giveImageResponse = async (req, res) => {
  // console.log("i am here");
  console.log(req.body);
  console.log(req.file);
  // const imageData = req.body.imageData;
  // const imagePath = path.join(__dirname, "uploads", "image.jpg");
  // const imageBuffer = Buffer.from(imageData, "base64");
  // const imagePath = path.join(__dirname, "uploads", "image.jpg");
  // const imageBuffer = fs.readFileSync(imagePath);
  // fs.writeFile(imagePath, imageBuffer, (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send("Error saving image");
  //   } else {
  //     console.log("Image saved successfully");
  //     res.status(200).send("Image saved successfully");
  //   }
  // });
  //   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  //   const prompt = `You are an expert in categorizing waste based on the scale which recognizes the type of waste and the amount of waste. You are working in a waste management company and you are responsible for categorizing the waste. among the following categories plastic, non-renewable, renewable, wet and dry. after classifying suggest how to dispose them in an environmental friendly manner.
  //     based on the image given answer the following in the given order select the options provided in the parentheses which holds true the most.
  //    Scale: Identify the scale of the waste as one of the following: (small, medium, large)
  // Waste Type: Classify the type of waste from these categories: (non-renewable, renewable)
  // Eco-Friendly Disposal: Suggest the most environmentally friendly way to dispose of this waste type.
  // Recycling Potential: Indicate if this waste type can be recycled, and if so, suggest the appropriate recycling method.
  //     `;
  //   console.log(req.body);
  //   console.log(req.file);
  //   const imageParts = [fileToGenerativePart("1.png", "image/png")];
  //   const result = await model.generateContent([prompt, ...imageParts]);
  //   const response = await result.response;
  //   const text = response.text();
  //   res.send(text);
};

module.exports = {
  giveTextResponse,
  giveImageResponse,
};
