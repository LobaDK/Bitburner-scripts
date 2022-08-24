export async function main(ns) {
	var hostname = ns.getHostname();
	while (true) {
		while (ns.getServerSecurityLevel(hostname) > ns.getServerMinSecurityLevel(hostname) * 1.5) {
			await ns.weaken(hostname);
		}
		while (ns.getServerMoneyAvailable(hostname) < 2000000) {
			await ns.grow(hostname);
		}
		await ns.hack(hostname);
	}
}
