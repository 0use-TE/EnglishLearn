"""Local preview with caching disabled. Run: python preview.py"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse


class PreviewHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format, *args):
        if args and str(args[1]) != "200":
            super().log_message(format, *args)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=4173)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent / "dist"
    server = ThreadingHTTPServer(
        ("127.0.0.1", args.port), partial(PreviewHandler, directory=str(root))
    )
    print(f"Local preview: http://127.0.0.1:{args.port}/ (cache disabled)", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
