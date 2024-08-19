// src/utils/utils.js

export const extractName = (filename) => {
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
    const name = nameWithoutExtension.replace(/[\d_]/g, " ").trim();
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString();

    if (isToday) {
        return 'Today';
    } else if (isYesterday) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString();
    }
};
