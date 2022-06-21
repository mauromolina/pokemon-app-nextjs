
const capitalizeText = (text: string): string => {
    return text[0].toUpperCase() + text.substring(1);
}

const exportedFunctions = {
    capitalizeText
}

export default exportedFunctions;