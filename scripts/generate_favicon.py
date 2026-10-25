import os
from PIL import Image, ImageDraw, ImageFont

def generate_favicons():
    # Master size for crisp anti-aliasing downscaling
    size = 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Box coordinates with padding for top-right glowing dot
    box_pad_left = 32
    box_pad_top = 48
    box_pad_right = 480
    box_pad_bottom = 496
    corner_radius = 110

    # Draw rounded dark box #16181F
    box_fill = (22, 24, 31, 255)       # #16181F
    border_color = (255, 255, 255, 45)  # rgba(255,255,255,0.18)
    border_width = 14

    draw.rounded_rectangle(
        [box_pad_left, box_pad_top, box_pad_right, box_pad_bottom],
        radius=corner_radius,
        fill=box_fill,
        outline=border_color,
        width=border_width
    )

    # Subtle inner top glow
    glow_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)
    glow_draw.rounded_rectangle(
        [box_pad_left + 8, box_pad_top + 8, box_pad_right - 8, (box_pad_top + box_pad_bottom) // 2],
        radius=corner_radius - 10,
        fill=(255, 255, 255, 12)
    )
    img = Image.alpha_composite(img, glow_img)
    draw = ImageDraw.Draw(img)

    # Load font
    font_path = "C:/Windows/Fonts/consolab.ttf"
    if not os.path.exists(font_path):
        font_path = "C:/Windows/Fonts/arialbd.ttf"
    
    font_size = 220
    font = ImageFont.truetype(font_path, font_size)

    # Calculate text positioning
    # "K" in white, "T" in neon lime (#C6FF4D -> 198, 255, 77)
    k_text = "K"
    t_text = "T"
    
    # Get bounding boxes
    k_bbox = font.getbbox(k_text)
    t_bbox = font.getbbox(t_text)
    k_w = k_bbox[2] - k_bbox[0]
    t_w = t_bbox[2] - t_bbox[0]
    spacing = -8
    total_text_w = k_w + t_w + spacing
    
    box_center_x = (box_pad_left + box_pad_right) // 2
    box_center_y = (box_pad_top + box_pad_bottom) // 2
    
    start_x = box_center_x - (total_text_w // 2)
    text_y = box_center_y - 128  # offset for baseline alignment

    # Draw "K"
    draw.text((start_x, text_y), k_text, font=font, fill=(255, 255, 255, 255))
    
    # Draw "T" with neon lime
    t_x = start_x + k_w + spacing
    draw.text((t_x, text_y), t_text, font=font, fill=(198, 255, 77, 255)) # #C6FF4D

    # Top-right notification dot with halo
    dot_center_x = box_pad_right - 6
    dot_center_y = box_pad_top + 6
    
    # Outer pulse glow layers
    halo_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    halo_draw = ImageDraw.Draw(halo_img)
    
    halo_draw.ellipse(
        [dot_center_x - 56, dot_center_y - 56, dot_center_x + 56, dot_center_y + 56],
        fill=(198, 255, 77, 40)
    )
    halo_draw.ellipse(
        [dot_center_x - 40, dot_center_y - 40, dot_center_x + 40, dot_center_y + 40],
        fill=(198, 255, 77, 90)
    )
    halo_draw.ellipse(
        [dot_center_x - 26, dot_center_y - 26, dot_center_x + 26, dot_center_y + 26],
        fill=(198, 255, 77, 255)
    )
    img = Image.alpha_composite(img, halo_img)

    # Save multi-size ICO
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    img.save("public/favicon.ico", format="ICO", sizes=ico_sizes)
    img.save("src/app/favicon.ico", format="ICO", sizes=ico_sizes)
    print("Saved public/favicon.ico and src/app/favicon.ico")

    # Save apple-touch-icon.png (180x180)
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-touch-icon.png", format="PNG")
    apple_icon.save("src/app/apple-icon.png", format="PNG")
    print("Saved public/apple-touch-icon.png and src/app/apple-icon.png")

    # Save 32x32 and 192x192 PNGs
    icon_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    icon_32.save("public/favicon-32x32.png", format="PNG")
    
    icon_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save("public/icon-192.png", format="PNG")
    icon_192.save("src/app/icon.png", format="PNG")
    print("Saved PNG icons")

    # Generate vector SVG
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Navbar Monogram Card Base -->
  <rect x="5" y="6" width="52" height="52" rx="14" fill="#16181F" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.8" />
  
  <!-- Subtle Top Highlight -->
  <rect x="6.5" y="7.5" width="49" height="24" rx="12" fill="white" opacity="0.04" />

  <!-- Monogram KT Typography -->
  <text x="17" y="42" font-family="'JetBrains Mono', 'Consolas', 'Courier New', monospace" font-size="24" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">K</text>
  <text x="33" y="42" font-family="'JetBrains Mono', 'Consolas', 'Courier New', monospace" font-size="24" font-weight="800" fill="#C6FF4D" letter-spacing="-0.5">T</text>

  <!-- Glowing Top-Right Notification Dot -->
  <circle cx="52" cy="10" r="6" fill="#C6FF4D" opacity="0.4" filter="url(#neon-glow)" />
  <circle cx="52" cy="10" r="3.2" fill="#C6FF4D" />
</svg>"""

    with open("public/favicon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    with open("src/app/icon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Saved public/favicon.svg and src/app/icon.svg")

if __name__ == "__main__":
    generate_favicons()
