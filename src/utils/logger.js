export const logResult = (result, label) => console.log(`🎯 ${!!label ? label : 'result'}:`, result);
export const logError = (err, label) => console.log(`🐛 ${!!label ? label : 'error'}:`, err);
