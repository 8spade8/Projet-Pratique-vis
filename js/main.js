'use strict';

const WIDTH = 900;
const HEIGHT = 500;
const MARGIN = { top: 40, right: 30, bottom: 60, left: 70 };

const tooltip = d3.select('#tooltip');

const svg = d3.select('#chart')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');

const chartArea = svg.append('g')
  .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

const innerWidth = WIDTH - MARGIN.left - MARGIN.right;
const innerHeight = HEIGHT - MARGIN.top - MARGIN.bottom;

// Load data — replace with actual dataset path
d3.csv('data/dataset.csv')
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.error('Data load failed:', err);
    d3.select('#chart').append('p')
      .style('color', 'red')
      .text('Erreur de chargement des données.');
  });

function render(data) {
  // TODO: implement scales, axes, marks, and interactivity
}
