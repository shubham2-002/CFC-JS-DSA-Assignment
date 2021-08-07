function Subseque(orgstr, substr = "") {
    if (orgstr === "") {
        console.log(substr)
        return 1;
    }
    let ch = orgstr[0];
    let ascii = orgstr.charCodeAt(0);
    let modstr = orgstr.substring(1);
    let count =
        Subseque(modstr, substr) +
        Subseque(modstr, substr + ch) +
        Subseque(modstr, substr + ascii);
        // No of possible subsequences
    return count; 

}
console.log(Subseque("ab"));