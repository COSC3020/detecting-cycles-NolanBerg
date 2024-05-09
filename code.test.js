const { hasCycle } = require('./code.js');
const assert = require('assert');

// Graph no cycle
let graph = {
    'A': { 'B': 1, 'C': 1 },
    'B': { 'A': 1, 'D': 1 },
    'C': { 'A': 1 },
    'D': { 'B': 1 }
};
console.log('Testing graph without cycle:', graph);
assert(hasCycle(graph) === false);

// Graph cycle
graph = {
    'A': { 'B': 1, 'C': 1 },
    'B': { 'A': 1, 'C': 1 },
    'C': { 'A': 1, 'B': 1 }
};
console.log('Testing graph with a cycle:', graph);
assert(hasCycle(graph) === true);

// Graph cycle + more nodes
graph = {
    'A': { 'B': 1 },
    'B': { 'A': 1, 'C': 1 },
    'C': { 'B': 1, 'D': 1 },
    'D': { 'C': 1, 'A': 1 }
};
console.log('Testing larger graph with a cycle:', graph);
assert(hasCycle(graph) === true);

// Disconnected graph no cycle
graph = {
    'A': { 'B': 1 },
    'B': { 'A': 1 },
    'C': { 'D': 1 },
    'D': { 'C': 1 }
};
console.log('Testing disconnected graph without cycle:', graph);
assert(hasCycle(graph) === false);

console.log('Test Passed');
