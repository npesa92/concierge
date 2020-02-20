#!/usr/bin/env node

import inq from 'inquirer';

const questions: inq.QuestionCollection = [
    {
        type: 'confirm',
        name: 'gotNicky',
        message: 'You got nicky?',
        default: true,
    },
    {
        type: 'input',
        name: 'namespace',
        message: 'Provide a namespace',
        default: () => 'my-namespace',
    },
    {
        type: 'list',
        name: 'cloudProvider',
        message: 'Select a Cloud Provider',
        choices: [
            'AWS',
            { name: 'Google Cloud', disabled: 'Coming Soon' },
            { name: 'Firebase', disabled: 'Coming Soon' },
        ],
        filter: (val) => val.toLowerCase(),
    },
];

export const configureService = async () => {
    const answers = await inq.prompt(questions);
    return answers;
}