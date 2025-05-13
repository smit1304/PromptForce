export const data = {
    description: `
        Summarizes the given content in a specific tone.
    `,
    promptTemplate: `
        Summarize the following content written in double quotetion in a {tone} tone. 

        "{content}"

        Ensure below things: 
        - Generate summery of {wordLimit} words. 
        - Keep the Generated content in a single paragraph. 
    `,
    temperature: 0.7,
    max_tokens: 500
};