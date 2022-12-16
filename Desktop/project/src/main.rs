use std::fs;
use std::collections::VecDeque;
use plotlib::page::Page;
use plotlib::repr::Plot;
use plotlib::view::ContinuousView;
use plotlib::style::{PointMarker, PointStyle};

type Vertex = usize;
type ListOfEdges = Vec<(Vertex,Vertex)>;
type AdjacencyLists = Vec<Vec<Vertex>>;
#[derive(Debug)]

struct Graph {
    pub outedges: AdjacencyLists,
    pub n: usize,
}

fn reverse_edges(list:&ListOfEdges)
        -> ListOfEdges {
    let mut new_list = vec![];
    for (u,v) in list {
        new_list.push((*v,*u));
    }
    new_list
}

impl Graph {
    fn new_empty(n: usize) -> Graph {
        Graph {
            n,
            outedges: vec![vec![]; n],
        }
    }
    fn add_edge(&mut self, u: Vertex, v: Vertex) {
        self.outedges[u].push(v)
    }
    fn add_directed_edges(&mut self, edges:&ListOfEdges) {
        for (u,v) in edges {
            self.outedges[*u].push(*v);
        }
    }
    fn sort_graph_lists(&mut self) {
        for l in self.outedges.iter_mut() {
            l.sort();
        }
    }
    fn create_directed(n:usize,edges:&ListOfEdges)
                                            -> Graph {
        let mut g = Graph{n,outedges:vec![vec![];n]};
        g.add_directed_edges(edges);
        g.sort_graph_lists();
        g                                        
    }
    fn create_undirected(n:usize,edges:&ListOfEdges)
                                            -> Graph {
        let mut g = Self::create_directed(n,edges);
        g.add_directed_edges(&reverse_edges(edges));
        g.sort_graph_lists();
        g                                        
    }
}

fn read_graph() -> Graph {
    let input = fs::read_to_string("athlete.txt").expect("Reading the file failed");
    let mut lines = input.trim().split("\n");
    let n = lines.next().unwrap().trim().parse::<usize>().unwrap();
    let mut graph = Graph::new_empty(n);
    for l in lines {
        let mut vertices = l.split(" ");
        let a = vertices.next().unwrap().trim().parse::<usize>().unwrap();
        let b = vertices.next().unwrap().trim().parse::<usize>().unwrap();
        graph.add_edge(a, b);
    }
    graph
}

fn read_edges() -> ListOfEdges {
    let input = fs::read_to_string("athlete.txt").expect("Reading the file failed");
    let mut line = input.trim().split("\n");
    let n = line.next().unwrap().trim().parse::<usize>().unwrap();
    let mut edges: ListOfEdges = Vec::new();
    for i in line {
        let mut vertices = i.split(" ");
        let x = vertices.next().unwrap().trim().parse::<usize>().unwrap();
        let y = vertices.next().unwrap().trim().parse::<usize>().unwrap();
        edges.push((x,y))
    }
    edges
}

fn main() {
    //There are 13866 total nodes
    let n: usize = 13866;

    //Read in edges from txt file
    let mut edges = read_edges();
    edges.sort();
    println!("{:?}",edges);

    //Create undirected graph
    let g = Graph::create_undirected(n,&edges);
    for (i, l) in g.outedges.iter().enumerate() {
        println!("{} {:?}", i, *l);
    }
    
    //Perform BFS
    let start: Vertex = 2; 
    let mut distance: Vec<Option<u32>> = vec![None;g.n];
    distance[start] = Some(0); 
    let mut queue: VecDeque<Vertex> = VecDeque::new();
    queue.push_back(start);
    println!("{:?}",queue);
    while let Some(v) = queue.pop_front() { 
        println!("top {:?}",queue);
        for u in g.outedges[v].iter() {
            if let None = distance[*u] { 
                distance[*u] = Some(distance[v].unwrap() + 1);
                queue.push_back(*u);
                println!("In {:?}",queue);
            }
        }
    }

    //Produces the distance for each vertex
    print!("vertex:distance");
    for v in 0..g.n {
        print!("     {}:{}",v,distance[v].unwrap());
    }
    println!();
    
    //Calculate average distance of vertices
    let mut sumdistance = 0;
    for v in 0..g.n {
        sumdistance += distance[v].unwrap();
    }
    println!("The average distance of each vertex is {}", sumdistance / g.outedges.len() as u32);

    //Find degree of each vertex
    for (i, l) in g.outedges.iter().enumerate() {
        println!("Vertex {}: Degree {:?}", i, l.len());
    }

    //Plot the distribution of Vertex and Degree
    let mut plot = vec![];
    for (i, l) in g.outedges.iter().enumerate() {
        plot.push((i as f64, l.len() as f64) )
    }

    let s1: Plot = Plot::new(plot).point_style(
        PointStyle::new()
            .marker(PointMarker::Square) 
            .colour("#334CDD").size(1.0),
    );
    let cv = ContinuousView::new()
        .add(s1)
        .x_range(0., 14150.)
        .y_range(0., 320.)
        .x_label("Vertex")
        .y_label("Degree");
    Page::single(&cv).save("vertexdegree.svg").unwrap();
}

            



