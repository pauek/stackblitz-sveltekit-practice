import { readFile } from 'fs/promises';

export async function load() {
	const buffer = await readFile('./content/some-text.txt');
	const text = buffer.toString();
	return { num: 42, lines: text.split('\n') };
}
