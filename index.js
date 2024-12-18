import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

import './loadEnv.js'

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:5173',
    }
});



import { createClient } from '@supabase/supabase-js'
import {config} from "dotenv";

const supabaseUrl = 'https://nwtapcoruuxdisphqvaz.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


io.on('connection', async (socket) => {
    console.log('a user connected');

    const { data, error } = await supabase
        .from('room')
        .select();

    console.log(data)
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});