export const truncateText = (text: string, length: number = 90) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
}