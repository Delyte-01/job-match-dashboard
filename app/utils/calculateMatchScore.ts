export const CalculateMatchScore = ( requiredSkills: string[], userSkills: string[]) =>{
    if (!requiredSkills.length) return { matchScore: 0, missingskills: []};

    const matchedSkills = requiredSkills.filter(skill =>userSkills.includes(skill));
    const missingSkills = requiredSkills.filter(skill =>!userSkills.includes(skill));
    
    const matchPercentage =(matchedSkills.length / requiredSkills.length) * 100;

    return { matchScore: Math.round(matchPercentage),missingSkills}
}