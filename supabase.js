const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://qvwehtprsxbleiekgrdg.supabase.co",
  "sb_publishable_YODJbmHXyxQOBY5GzJsE6w_6307tCMw"
);

module.exports = supabase;