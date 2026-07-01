import os
from PIL import Image

folder = r'c:\Users\PC\Downloads\fe mkt2\udata_new\public\customers'
for file in os.listdir(folder):
    if not file.endswith('.webp') and not file.endswith('.png'): continue
    path = os.path.join(folder, file)
    try:
        img = Image.open(path).convert('RGBA')
        width, height = img.size
        corners = [
            img.getpixel((0, 0)),
            img.getpixel((width-1, 0)),
            img.getpixel((0, height-1)),
            img.getpixel((width-1, height-1))
        ]
        white_corners = sum(1 for c in corners if c[0] > 235 and c[1] > 235 and c[2] > 235)
        
        if white_corners >= 2:
            print(f'Removing white bg for {file}')
            data = img.getdata()
            new_data = []
            for r, g, b, a in data:
                avg = (r + g + b) / 3
                if avg > 230:
                    alpha = int(((255 - avg) / 25) * 255)
                    alpha = max(0, min(255, alpha))
                    new_data.append((255, 255, 255, alpha))
                else:
                    new_data.append((r, g, b, a))
            img.putdata(new_data)
            img.save(path)
    except Exception as e:
        print(f'Error on {file}: {e}')
