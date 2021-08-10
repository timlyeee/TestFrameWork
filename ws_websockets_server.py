import websockets
import time
import asyncio

async def echo(websocket, path):
    async for message in websocket:
        print(message)
        await websocket.send("@received")

start_server = websockets.serve(echo, "127.0.0.1", 8888)


asyncio.get_event_loop().run_until_complete(start_server)
print("start server")
asyncio.get_event_loop().run_forever()