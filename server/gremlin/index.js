const gremlin = require('gremlin');
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

const driver = new DriverRemoteConnection('ws://localhost:8182/gremlin');
const graph = new Graph();
const g = graph.traversal().withRemote(driver);

function bla() {
  g.addV('person').property('name', 'dave').next();
  let nodes;
  setTimeout(async () => { nodes = await g.V().hasLabel('person').values('name').toList(); console.log(nodes); }, 2000);
}

bla();

g.addV('person').property('name', 'dave');

driver.close();