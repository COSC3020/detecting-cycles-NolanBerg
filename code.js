class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, index) => index);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); 
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }
}

function hasCycle(graph) {
    const nodes = Object.keys(graph);
    const nodeIndex = new Map();
    nodes.forEach((node, index) => {
        nodeIndex.set(node, index);
    });

    const uf = new UnionFind(nodes.length);
    const visitedEdges = new Set();

    for (const node of nodes) {
        for (const neighbor of Object.keys(graph[node])) {
            const nodeIdx = nodeIndex.get(node);
            const neighborIdx = nodeIndex.get(neighbor);
            const edge = [nodeIdx, neighborIdx].sort().join('-');
            if (visitedEdges.has(edge)) {
                continue;
            }
            visitedEdges.add(edge);
            if (uf.find(nodeIdx) === uf.find(neighborIdx)) {
                console.log(`Cycle detected: ${node} - ${neighbor}`);
                return true;
            }
            uf.union(nodeIdx, neighborIdx);
        }
    }

    return false;
}

module.exports = { hasCycle };
