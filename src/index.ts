#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

import { configureService } from './configure';

console.log(
    chalk.red(
        figlet.textSync('nicky-cli', { horizontalLayout: 'full' })
    )
);

program.version('0.0.1');

program
    .command('configure')
    .alias('c')
    .description('Configure a new translation service!')
    .action(async () => {
        const config = await configureService();
    });

program.parse(process.argv);
