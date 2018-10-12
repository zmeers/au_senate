// r2d3: https://rstudio.github.io/r2d3

var margin = {top: 5, right: 20, bottom: 30, left: 40},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.linear()
    .range([0, width]);
var y = d3.scale.linear()
    .range([height, 0]);


    
    
// Define the div for the tooltip
var div = d3.select("body").append("div") 
    .attr("width", 600)
    .attr("height", 300)
    .attr("class", "tooltip")       
    .style("opacity", 0);
    
    
  
  // standard axis stuff
  x.domain([0, d3.max(data, function(d) { return d.x; })]);
  y.domain([0, d3.max(data, function(d) { return d.y; })]);
  
  // draw a point g
  var point = svg.selectAll(".point")
    .data(data)
    .enter()
  .append("g")
    .attr("class", "point");
    
  // add circle
  point.append("circle")
    .attr("cx", function(d) { return x(d.x + 12); })
    .attr("r", 10)
    .attr("cy", function(d) { return y(d.y - 2); })
    .style("fill", function(d){ return d.colour; })
    .on("mouseover", function(d) {    
            div.transition()    
                .duration(30)    
                .style("opacity", 0.9);    
            div .html("<b>Senator " + 
                     d.first_name + " " + d.surname +
                      "<b/>"+ "<br/> State: "  + 
                     d.state + "<br/> Political party: " + 
                     d.political_party)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY) + "px")
                .style();  
            })          
    .on("mouseout", function(d) {   
            div.transition()    
                .duration(30)    
                .style("opacity", 0); 
        });
  
    