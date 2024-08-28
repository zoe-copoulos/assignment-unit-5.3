'use strict';

const Mocha = require('mocha');
const {
    EVENT_RUN_BEGIN,
    EVENT_RUN_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
    EVENT_TEST_PENDING
    
} = Mocha.Runner.constants;

// Custom output to match our rubric
class MyReporter {
    constructor(runner) {
        const stats = runner.stats;
        // Need a way to know how many STRETCH goal bits/bobs to append to the
        // programmatically generated rubric. Check out how this variable gets
        // used inside the EVENT_RUN_END callback.
        let stretchGoalsLoggedToOutput = 0;
        const errors = [];
        runner
            .on(EVENT_TEST_FAIL, (test, err) => {
                if (test.parent.title.includes('STRETCH')) {
                  stretchGoalsLoggedToOutput++;
                }
                errors.push(err);
                console.log(
                    `\x1b[31m`,
                    `| ${test.parent.title} | no, see note ${errors.length} |`,
                    `\x1b[0m`
                );
            })
            .on(EVENT_TEST_PENDING, (test, err) => {
                if (test.parent.title.includes('STRETCH')) {
                    stretchGoalsLoggedToOutput++;
                }
                console.log(
                    `\x1b[33m`,
                    `| ${test.parent.title} | skipped |`,
                    `\x1b[0m`
                );
            })
            .on(EVENT_TEST_PASS, (test, err) => {
                if (test.parent.title.includes('STRETCH')) {
                    stretchGoalsLoggedToOutput++;
                }
                console.log(
                    `\x1b[32m`,
                    `| ${test.parent.title} | yes |`,
                    `\x1b[0m`
                );
            })
            .once(EVENT_RUN_BEGIN, () => {
                console.log('');
                console.log(`---
| Part 3: Music Collection | Complete? |
| --- | :---: |`);
                console.log(
                    `\x1b[32m`,
                    `| Runs in browser without console errors | yes |`,
                    `\x1b[0m`
                );
                console.log(
                  `\x1b[33m`,
                  `| Verified that all functions behave as required in relevant test cases | - |`,
                  `\x1b[0m`
                );
            })
            .once(EVENT_RUN_END, () => {
                const stretchGoalRubricRows = [
                  'STRETCH: `search` takes in a criteria object and returns an array of matching albums',
                  'STRETCH: Added an array of `tracks` to the albums and updated functions to work with this property',
                  'STRETCH: All Stretch functions tested fully',
                ]
                for (let i = stretchGoalsLoggedToOutput; i < stretchGoalRubricRows.length; i++) {
                    console.log(
                        `\x1b[33m`,
                        `| ${stretchGoalRubricRows[i]} | - |`,
                        `\x1b[0m`
                    );
                }

                console.log('');
                
                // console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);

                errors.map((err, i) => {
                    console.log('');
                    console.log(`${i + 1}) ${err}`);
                });
            });
    }
}

module.exports = MyReporter;
