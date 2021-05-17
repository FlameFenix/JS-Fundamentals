function sortingByCriteria(input) {

    const twoCriteriaSort = (a, b) =>
    a.length - b.length || a.localeCompare(b);

    let sorted = input.sort(twoCriteriaSort);

    console.log(sorted.join('\n'));
}

sortingByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);