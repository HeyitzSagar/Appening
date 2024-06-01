const searchAnagram = (req, res) => {
    const searchString = req.body.searchString;
    const stringArray = ["Race", "Part", "Heart", "Listen"];

    const isAnagram = (s1, s2) => {
        const normalize = str => str.toLowerCase().split('').sort().join('');
        return normalize(s1) === normalize(s2);
    };

    const result = stringArray.some(string => isAnagram(searchString, string));
    res.json({ result });
}

module.exports = {searchAnagram};