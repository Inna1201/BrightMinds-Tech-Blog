const newPostFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          content
        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert("Post not saved");
      }
    };
    
    document.querySelector('#nform').addEventListener('submit', newPostFormHandler);