const { hasCycle } = require('./code.js');
const assert = require('assert');

// Graph w no cycle
let graph = {
    'A': { 'B': 1, 'C': 1 },
    'B': { 'A': 1, 'D': 1 },
    'C': { 'A': 1 },
    'D': { 'B': 1 }
};
assert(hasCycle(graph) === false);

// Graph w cycle
graph = {
    'A': { 'B': 1, 'C': 1 },
    'B': { 'A': 1, 'C': 1 },
    'C': { 'A': 1, 'B': 1 }
};
assert(hasCycle(graph) === true);

// Graph w cycle more nodes
graph = {
    'A': { 'B': 1 },
    'B': { 'A': 1, 'C': 1 },
    'C': { 'B': 1, 'D': 1 },
    'D': { 'C': 1, 'A': 1 }
};
assert(hasCycle(graph) === true);

// Disconnected graph w no cycle
graph = {
    'A': { 'B': 1 },
    'B': { 'A': 1 },
    'C': { 'D': 1 },
    'D': { 'C': 1 }
};
assert(hasCycle(graph) === false);

console.log('All tests passed!');
