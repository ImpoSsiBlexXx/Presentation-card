#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double-single'
}
// Text + chalk definitions
let data = {
  'name': chalk.white.bold('Jose Morales'),
  'handle': chalk.yellow('@elegidoadedo'),
  'work': chalk.white('👨🏻‍💻 FullStack Developer\n🎓 Tech Addict'),
  'twitter': chalk.yellow('https://twitter.com/elegidoadedo'),
  'github': chalk.yellow('https://github.com/elegidoadedo'),
  'linkedin': chalk.yellow('https://linkedin.com/in/elegidoadedo'),
  'web': chalk.yellow('https://elegidoadedo.es'),
  'npx': chalk.white('npx elegidoadedo'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} (${data.handle})`
var working = `${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline +
  working + newline + newline +
  twittering + newline +
  githubing + newline +
  linkedining + newline +
  webing + newline + newline +
  carding

console.log(chalk.yellow(boxen(output, options)))