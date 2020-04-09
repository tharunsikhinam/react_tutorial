// DEFAULT EXPORT
export default function timesDefault(x) {
    return x * x * x;
}

// MULTIPLE EXPORTS
export function times(x) {
    return x * x;
}

export function plusTwo(number) {
    return number + 2;
}