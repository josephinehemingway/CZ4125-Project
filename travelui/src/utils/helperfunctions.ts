const capitalise = (destinationName: string) => {
    const arr = destinationName.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    return arr.join(" ");
}

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export { capitalise, scrollToTop };