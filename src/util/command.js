/* Extract Directive */
const captureDirective =
    (str) => str.slice(0, 1)[0].slice(1);

/* Build Args */
const buildArgs = function (args) {
    const argarray = [];
    args.forEach(arg => {
        let a = arg;
        if (arg.includes(":")) {
            const a = arg.split(':');
            argarray.push([a[0], a[1]]);
        } else {
            argarray.push([a])
        }
    });
    return argarray;
}
const prefix = process.env.PREFIX || "!";
module.exports =
    (string) => {
        string = string.trim();
        const pref = string[0];
        if (pref != prefix) {
            return false;
        }
        const str = string.split(/ /g);

        if (str.length === 1) { // If no args, return command
            return {
                directive: captureDirective(str),
                args: []
            }
        }

        const directive = captureDirective(str);

        const a = str.slice(1, str.length);

        const args = buildArgs(a);

        return {
            directive,
            args
        }
    }