---
title: 'Thinagents: A lightweight framework for building AI agents'
description: 'A model-agnostic and flexible framework for building AI agents, powered by litellm.'
link: https://thinagents.vercel.app
techstack:
    - Python
    - litellm
cover: '/thinagents-flow.png'
source: 'https://github.com/PrabhuKiran8790/thinagents'
order: 1
---

Thinagents is a modern, lightweight framework for building AI agents with ease and flexibility. It is inspired by [Agno](https://www.agno.com), [Google ADK](https://google.github.io/adk-docs/) and powered by [litellm](https://www.litellm.ai), giving you access to 100+ LLM APIs and providers. Whether you're prototyping, building production agents, or experimenting with new models, Thinagents helps you move fast with minimal overhead.

### Features

- **Tool Calling:** Extend agent capabilities with custom Python functions, decorated tools for advanced control, and seamless integration with LangChain and Agno toolkits.
- **Streaming:** Asynchronous streaming of responses is supported, especially when using MCP, allowing for real-time output.
- **Multi-Agent Systems:** Build hierarchical and collaborative AI systems by composing parent agents with specialized sub-agents.
- **MCP (Model Context Protocol):** Integrates with MCP to provide agents with standardized access to files, APIs, and other tools.
- **Memory:** Pluggable memory backends (in-memory, file-based, SQLite) to persist and reuse conversation history.

### Quick Example

Create an agent and add a custom tool in just a few lines:

```py title="example.py"
import os
from thinagents import Agent

os.environ["OPENAI_API_KEY"] = "your-api-key"

def add(a: int, b: int) -> int:
    return a + b

agent = Agent(
    name="Math Agent",
    model="openai/gpt-4o-mini",
    tools=[add],
)

response = agent.run("What is 2 + 3?")
print(response.content)
``` 

For more examples, check out the [documentation](https://thinagents.vercel.app/docs).