export const data = {
    description: `
        Generate a cover letter.
    `,
    promptTemplate: `

        #{userResume}#

        - Analyze the resume/user detail given above starting with single # and ending with single #
        - Denerate a cover letter based on analyzed resume/user detail for the following job description written in double quotation for job position {jobPosition} given by {companyName}.
        
        "{jobDescription}"

        Ensure below things: 
        - Keep the tone formal-professional and persuasive as a cover letter should be.
        - Follow the below format:
            - Write today's date in the first line top-left corner.
            - Leave a line space.
            - Write position that is being applied for and job in same alignment top-left.
            Follow this formate "RE: Software Developer (Co-op) - Job ID: R05866".
            - Leave a line space.
            - Write Dear [Hiring Manager's Name], in the same alignment top-left. Then begin the letter.

            1. Introduction: 
                - Clearly state the position being applied for.
                - Summarize the applicant's relevant educational background, including degrees and specializations.
                - Highlight key relevant technical skills and experience.
                - Mention any relevant professional experience, internships.
                - Emphasize relevant personal qualities or soft skills.
                - Express the applicant's interest in the company and the position, including any alignment with the company's values or goals.
                - Maintain a professional and enthusiastic tone.
                - Be concise and well-organized (approximately 100-150 words).

            2. Body Paragraph: 
                - Begin with a strong statement highlighting the candidate's key strengths or unique value proposition.
                - Provide a detailed list of relevant technical or soft skills. 
                - Describe specific professional experiences, internships, or projects, providing concrete examples of accomplishments and responsibilities.
                - Emphasize relevant soft skills, such as teamwork, communication, problem-solving, adaptability, or time management.
                - Explicitly address the transferability of the candidate's skills and experience to the target role or industry, if necessary.
                - Express enthusiasm for the specific company or role, mentioning relevant aspects of the company culture, technology, or goals.
                - Maintain a confident, professional, and enthusiastic tone, and adhere to a well-structured flow of information (approximately 150-250 words)."

            3. Second Body Paragraph: 
                - Express enthusiasm for the opportunity to join the company and/or take on the specific role.
                - Research about company and demonstrate knowledge of the company's achievements, mission, values, or recent developments.
                - Highlight the candidate's eagerness to contribute to the company's goals or mission.
                - Express a desire for professional growth within the company, mentioning specific aspects of the company culture or work environment that are appealing (e.g., collaborative, innovative, customer-focused).
                - Maintain a concise, professional, and enthusiastic tone (approximately 75-125 words)." 

            4. Ending Paragraph:
                - Express gratitude to the reader for their time and consideration.
                - Indicate the candidate's anticipation of hearing from the reader, ideally with respect to scheduling an interview.
                - Provide the candidate's contact information (phone number and/or email address).
                - Maintain a concise and professional tone (approximately 50-75 words)."
        
    `,
};