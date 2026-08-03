function remove(string) {
    const lastValue = string[string.length - 1]
    if (lastValue === "!") {
        return string.slice(0, -1)
    }
    return string;
}