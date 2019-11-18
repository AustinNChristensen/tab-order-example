export const isValidEmail = (val) => {
    console.log('val', val);
    return val.indexOf('@') > -1;
};

export const isValidString = (val) => {
    return val.length > 0;
}