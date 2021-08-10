#!/usr/bin/env python

import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8888"
    async with websockets.connect(uri) as websocket:
        await websocket.send("Hello world!")
        message = await websocket.recv()
        print(message)
        

asyncio.get_event_loop().run_until_complete(hello())