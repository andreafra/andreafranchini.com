export const smartquotes = (input: string) => input
    .replace(/(\s|^)\"([^\"]+)\"/g, "$1\u201C$2\u201D")