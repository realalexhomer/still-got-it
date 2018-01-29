# React / Redux / Flow / Webpack / Mocha / Chai / Rxjs / CSSModules

Check out live version here: https://wizardly-ardinghelli-dbe2ba.netlify.com/

As the title suggests, this repo is a scaffold based on a bunch of the tools I like and would likely use in a "real" environment if given the chance to create a 100% greenfield application.

The first project built on it is available in src/js/componenets/Counter. As the name suggests its just a counter! I'll be adding more in the days to come.

My goal for this project is to create a Redux / React app with an architecture that allows TDD. Last year when I was working on Redux / React apps this was not an easy task, as without Rxjs people kept putting business logic in the React code, which was very difficult or impossible to test.

This repo hopefully shows one good solution to this problem, a la redux-observable, which allows you to put business logic in epics which are much easier to test. The goal is to put as much business logic as possible in epics and reducers, and keeping components / containers as devoid as possible of any business logic.

A few notes on tool usage and thoughts:

I am not using (Jest)[https://facebook.github.io/jest/] because I had a few horrible experiences with it in the summer of last year (2017). It seems like there were just a huge number of bugs, and every month or so there was a major version change with breaking API changes. Maybe it has matured since then but for now I am going to be using the more mature framework Mocha.

I am using (Postcss)[https://github.com/postcss/postcss], and am regretting it. I am probably going to add Sass before I write much more css as I am finding Postcss a little too immature for my needs. I'm not sure what Postcss is giving me except for a tiny amount of optimization and slightly faster build speeds, and it has caused a bunch of headaches and made my CSS harder to read / reason with.

I really really like (Rxjs)[http://reactivex.io/rxjs/]. The only issue I've found with it after using it in a few "work" projects is that it does take a lot of boilerplate, similar to Redux but even worse. People are working on solutions to this problem but I think one good solution would be to simply use a scaffolding tool like Yeoman. It solves the major pain point I've found in React / Redux apps, by letting you test and organize business logic with async code, and has a very powerful API.

(CSSModules)[https://github.com/css-modules/css-modules] seem like a really good idea. Removing global scope is helpful, but it is also helpful to have the CSS tree available if you need it because sometimes it contains values that are helpful.

(Webpack)[https://webpack.js.org/] is pretty much essential at this point and the webpack 2 api is much much easier to learn. It used to be the case that I would only use it if the app was "complex enough to need it", but at this point the API is so easy that there is no reason not to use it.

(Flow)[https://flow.org/en/] seems well thought out, and suffers all the problems / has all of the benefits of a well designed type checker. I think type checking is something that most people should use as it just makes code easier to reason with and slightly safer to push.
