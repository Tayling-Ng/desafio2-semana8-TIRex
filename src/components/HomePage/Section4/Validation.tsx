export const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

export const validateName = (name: string): boolean => {
    const regex = /^[A-Za-z\s]{3,}$/;
    return regex.test(name.trim())
};