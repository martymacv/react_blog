export const CHAR_REPLACER = {
    email: (email) => email
        .replace(new RegExp(String.raw`[^\w@.]`, 'g'), ''),
    pwd: (pwd) => pwd
        .replace(new RegExp(String.raw`[^\w\d!@#$%^&*()_+\-=[\]{};'"|,.<>/?]`, 'g'), '')
}