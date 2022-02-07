# deno-on-northflank

Deno is a secure server-side JavaScript runtime, similar to Node.js. Like Node.js, Deno 🦕 uses the V8 JavaScript engine under the hood but the rest of runtime is implemented in Rust and Typescript. Fun fact: Deno is an anagram of Node 🔄. Both Node.js and Deno were created by Ryan Dahl, who said: 

  *“With Deno we are trying to remove a lot of the complexity inherent in transpiling TypeScript code down to JavaScript with the hope this will enable more people to utilize it.”*

If you’re interested in knowing more about Ryan Dahl and his projects, you’ll find <a href="https://hackernoon.com/javascript-has-never-been-my-favorite-language-interview-with-nodejs-creator-ryan-dahl-yo5m33qx" target="_blank">this article</a> interesting.

Depending on your development preferences you will choose to deploy your code either using a Dockerfile 🐳 or Buildpack 📦. We will describe both methods and guide you through the process of deploying Deno on Northflank with each of them. If you are still unsure whether to use Dockerfile or Buildpack, we found Doximity's <a href="https://technology.doximity.com/articles/buildpacks-vs-dockerfiles" target="_blank">Buildpacks vs Dockerfiles article</a> comparing them very valuable. 

Let’s get to it!

We created a repository based on the "Getting Started" example from the <a href="https://deno.land/" target="_blank">official Deno site</a> and added some extra files that are needed to be able to deploy on Northflank:
  - For deployment using Dockerfile: `Dockerfile`.
  - For deployment using Buildpack: `Procfile`.
 
The repo can be found <a href="https://github.com/northflank-guides/deno-on-northflank" target="_blank">here</a> and it has the following structure:
 
```
deno-on-northflank/
├─ Dockerfile		    (needed for Dockerfile deployment)
├─ Procfile		    (needed for Buildpack deployment)
├─ app.ts
└─ deps.ts		    (dependency management)
````

## Deploy Deno on Northflank with Dockerfile

1. Open the <a href="https://github.com/northflank-guides/deno-on-northflank" target="_blank">repository containing the Deno project</a>. Click on "Use this template" to create a copy of this repository under your Github account.

2. Connect your Github account to your Northflank account. You can find details on how to do so in <a href="https://northflank.com/docs/v1/application/getting-started/link-your-git-account" target="_blank">our documentation</a>.
 
3. In your project, create a combined service:

    3.1. Under "Repository", you will see a list of your repositories from which you can choose the Deno repo we just created. 

    3.2. Select the branch `main`.

    3.3. Select "Dockerfile" as the build option and click "Verify".
 
   - <Text color="grey3">A combined service handles the build and deployment of your code.</Text>
 
   - <Text color="grey3">Port 8080 will automatically be exposed with the HTTP protocol.</Text>
 
4. Access the deployment via the unique `code.run` service URL or finish up by <a href="https://northflank.com/docs/v1/application/domains/domain-registrar-guides" target="_blank">linking a custom domain</a>. You will see `Hello World! This is Deno running on Northflank.` and your Deno app is ready to be built further! ✨🦕🚀✨ 

## Deploy Deno on Northflank with Buildpack

1. Open the <a href="https://github.com/northflank-guides/deno-on-northflank" target="_blank">repository containing the Deno project</a>. Click on "Use this template" to create a copy of this repository under your Github account.
 
2. Connect your Github account to your Northflank account. You can find details on how to do so in <a href="https://northflank.com/docs/v1/application/getting-started/link-your-git-account" target="_blank">our documentation</a>.
 
3. In your project, create a combined service: 

    3.1. Under "Repository", you will see a list of your repositories from which you can choose the Deno repo we just created. 

    3.2. Select the branch `main`.

    3.3. Select Buildpack as the build option.

    3.4. Under “Advanced build settings”, in Custom Buildpacks click “Add Buildpack” and paste the following url: <a href="https://github.com/chibat/heroku-buildpack-deno.git " target="_blank">`https://github.com/chibat/heroku-buildpack-deno.git`</a>. 

   - <Text color="grey3">A combined service handles the build and deployment of your code.</Text>
 
   - <Text color="grey3">Port 8080 will automatically be exposed with the HTTP protocol.</Text>
 
4. Access the deployment via the unique `code.run` service URL or finish up by <a href="https://northflank.com/docs/v1/application/domains/domain-registrar-guides" target="_blank">linking a custom domain</a>. A page with `Hello World! This is Deno running on Northflank.` will be displayed and your Deno project is ready for you to edit the`app.ts`and `deps.ts` and build great things! ✨🦕🚀✨
