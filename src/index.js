module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined" || matrix.length === 0) {
        return [];
    }
    
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result = [...result, ...matrix[i].sort( (a, b) => a - b )];
        } else {
            result = [...result, ...matrix[i].sort( (a, b) => b - a )];
        }
    }
    return result;
}