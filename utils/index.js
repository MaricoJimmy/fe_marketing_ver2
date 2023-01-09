export const getDate = (publishedAt) => {
    return new Date(publishedAt).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}