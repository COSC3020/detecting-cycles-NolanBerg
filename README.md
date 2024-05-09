[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Sources: Used ai for code and runtime analysis

Initializing the parent and rank arrays takes $O(V)$

The find and operation uses path compression, with a time complexity of $O(\alpha(V))$, where $\alpha$ is the inverse Ackermann function. 

The union operation uses union by rank, which also has a time complexity of $O(\alpha(V))$.

If number of edges is $E$, the function will perform at most $E$ find and union operations.

The function has a set to keep track of visited edges, which ensures each edge is processed once. Adding and checking for an edge takes $O(1)$ time.

The total time complexity is dominated by the $E$ find and union operations, each of which takes $O(\alpha(V))$ time in the worst case.

Therefore, the total worst case time complexity is $\Theta(E \cdot \alpha(V))$


