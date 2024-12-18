import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nwtapcoruuxdisphqvaz.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


io.on('connection', async (socket) => {
    console.log('a user connected');
    const { data, error } = await supabase
        .from('rooms')
        .select();
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});