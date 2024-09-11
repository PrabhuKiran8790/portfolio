import type { Module, ModuleWithFilename } from '$lib/types';

function sortModulesByOrder(modules: ModuleWithFilename[]): ModuleWithFilename[] {
	return modules.sort((a, b) => a.metadata.order - b.metadata.order);
}
function extractModulesWithFilename(modules: Record<string, Module>): ModuleWithFilename[] {
	const result: ModuleWithFilename[] = [];

	for (const path in modules) {
		if (Object.hasOwn(modules, path)) {
			const fileNameWithExtension = path.split('/').pop();

			if (!fileNameWithExtension) {
				throw new Error('Invalid path');
			}

			const fileName = fileNameWithExtension.split('.').slice(0, -1).join('.');
			const module = modules[path];

			result.push({
				...module,
				filename: fileName
			});
		}
	}

	return result;
}
export const load = async () => {
	const data: Record<string, Module> = import.meta.glob('/works/*.md', { eager: true });
	const modules = extractModulesWithFilename(data);

	return {
		works: sortModulesByOrder(modules)
	};
};
