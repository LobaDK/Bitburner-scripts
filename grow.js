/** @param {NS} ns */
export async function main(ns) {
	const name = ns.args[0];
	if (ns.args.length == 0) {
		ns.tprint('Argument required');
	}
	else {
		while (true) {
			ns.tprint(`Growing ${name}`)
			await ns.grow(name);
		}
	}
}
