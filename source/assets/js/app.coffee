graph = jsnx.Graph();
my_groups = [];

d3.json "assets/data/skills.json", (error, json) ->
  data = json

  for group_data in data
    group_name = group_data.name
    graph.add_node(group_name)
    my_groups.push group_name

    for skill in group_data.skills
      graph.add_node(skill, {group:"#{group_data.group}"})
      graph.add_edge(group_name, skill)

  while(my_groups.length > 0)
    gr = my_groups.pop()
    graph.add_edge(gr, my_groups[0])


  color = d3.scale.category20()
  jsnx.draw(graph, {
    element: '#skills-graph',
    width: 1100,
    height: 1100,
    layout_attr: {
      charge: -1000,
      linkDistance: 200
    },
    node_attr: {
      r: 40,
      title: (d) ->
        d.label
    },
    with_labels: true;
    label_style: {

    },
    node_style: {
      fill: (d) ->
        color(d.data.group)
      stroke: 'none'
    },
    edge_style: {
      stroke: '#999'
    },
    pan_zoom: {
      enabled: false
    }
  }, true)

